<?php

namespace APIBundle\Controller;

use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\JsonResponse;
use Nelmio\ApiDocBundle\Annotation\ApiDoc;
use Vortexgin\CoreBundle\Util\HttpStatusHelper;
use Vortexgin\CoreBundle\Util\Validator;
use Vortexgin\CoreBundle\Controller\BaseController;
use APIBundle\Manager\stickyManager;

class StickyController extends BaseController{

  /**
   * @ApiDoc(
   *      section="INALIX",
   *      resource="Sticky",
   *      description="Create sticky",
   *      parameters={
   *          {"name"="name","dataType"="string", "required"=true, "description"="sticky name"},
   *          {"name"="message","dataType"="string", "required"=true, "description"="message"},
   *          {"name"="position","dataType"="string", "required"=false, "description"="position coordinate. Format: top, left"},
   *      },
   *      statusCodes={
   *          201="Returned when successful",
   *          400="Bad request",
   *          500="System error",
   *      }
   * )
   */
    public function createAction(Request $request){
        try{
          $this->init();
          $post = $request->request->all();

          if(!Validator::validate($post, 'name', null, 'empty'))
              return $this->errorResponse('Please insert title');
          if(!Validator::validate($post, 'message', null, 'empty'))
              return $this->errorResponse('Please insert message');

          /* @var $stickyManager \APIBundle\Manager\StickyManager */
          $stickyManager = $this->container->get('api.manager.sticky');

          $param = array(
              'name'      => $post['name'],
              'message'   => $post['message'],
              'position'  => Validator::validate($post, 'position', null, 'empty')?$post['position']:null,
              'user_log'  => $this->user->getUsername()?:'ANONYMOUS',
          );
          $sticky = $stickyManager->insert($param);
          if(!$sticky)
              return $this->errorResponse('Create sticky failed, Please try again later', HttpStatusHelper::HTTP_EXPECTATION_FAILED);

          return $this->successResponse(array(
            'sticky'=> $stickyManager->serialize($sticky),
          ), HttpStatusHelper::HTTP_CREATED);
        }catch(\Exception $e){
          $this->container->get('logger')->error(sprintf($e->getMessage()));
          return $this->errorResponse('Create sticky failed, Please try again later', HttpStatusHelper::HTTP_PRECONDITION_FAILED);
        }
    }

    /**
     * @ApiDoc(
     *      section="INALIX",
     *      resource="Sticky",
     *      description="Read sticky",
     *      parameters={
     *          {"name"="limit",        "dataType"="integer", "required"=false, "description"="data limit, default 20"},
     *          {"name"="page",         "dataType"="integer", "required"=false, "description"="data offset, default 0"},
     *          {"name"="order_by",     "dataType"="string", "required"=false, "format"="id|expired_date", "description"="data order by, default id"},
     *          {"name"="order_type",   "dataType"="string", "required"=false, "format"="ASC|DESC", "description"="data order type, default DESC"},
     *          {"name"="id",           "dataType"="string", "required"=false, "description"="id of sticky"},
     *          {"name"="name",         "dataType"="string", "required"=false, "description"="name of sticky"},
     *          {"name"="message",      "dataType"="string", "required"=false, "description"="message"},
     *      },
     *      statusCodes={
     *          200="Returned when successful",
     *          400="Bad request",
     *          500="System error",
     *      }
     * )
     */
    public function readAction(Request $request){
        try{
            $this->init();
            $get = $request->query->all();

            /* @var $stickyManager \APIBundle\Manager\StickyManager */
            $stickyManager = $this->container->get('api.manager.sticky');

            $filter = array();
            if(Validator::validate($get, 'query', null, 'empty')){
                if(Validator::validate($get, 'fields', null, 'empty')){
                    $fields = json_decode($get['fields'], true);
                    foreach($fields as $field){
                        $get[$field] = $get['query'];
                    }
                }else{
                    $get['title'] = $get['query'];
                }
            }
            if(Validator::validate($get, 'id', null, 'empty'))
                $filter[] = array('id', $get['id']);
            if(Validator::validate($get, 'name', null, 'empty'))
                $filter[] = array('name', $get['name'], 'like');
            if(Validator::validate($get, 'message', null, 'empty'))
                $filter[] = array('message', $get['message'], 'like');

            list($orderBy, $orderSort, $limit, $page) = $this->extractDefaultParameter($stickyManager, $get);

            $listSticky   = $stickyManager->get($filter, $orderBy, $orderSort, $page, $limit);
            $totalSticky  = $stickyManager->count($filter);

            if(count($listSticky) <= 0)
                return $this->errorResponse('Sticky not found', HttpStatusHelper::HTTP_NOT_FOUND);

            foreach($listSticky as $key=>$value){
                $data[] = $stickyManager->serialize($value);
            }

            return $this->successResponse(array(
                'sticky'    => $data,
                'count'     => array(
                    'total' => count($listSticky),
                    'all'   => (int) $totalSticky[1],
                )
            ));
        }catch(\Exception $e){
            $this->container->get('logger')->error(sprintf($e->getMessage()));
            return $this->errorResponse('Read sticky failed, Please try again later', HttpStatusHelper::HTTP_PRECONDITION_FAILED);
        }
    }

    /**
     * @ApiDoc(
     *      section="INALIX",
     *      resource="Sticky",
     *      description="Update sticky",
     *      parameters={
     *          {"name"="name","dataType"="string", "required"=false, "description"="sticky name"},
     *          {"name"="message","dataType"="string", "required"=false, "description"="message"},
     *          {"name"="position","dataType"="string", "required"=false, "description"="position coordinate. Format: top, left"},
     *      },
     *      statusCodes={
     *          202="Returned when successful",
     *          400="Bad request",
     *          500="System error",
     *      }
     * )
     */
    public function updateAction(Request $request, $id){
        try{
            $this->init();
            $post = $request->request->all();

            /* @var $stickyManager \APIBundle\Manager\stickyManager */
            $stickyManager = $this->container->get('api.manager.sticky');

            $detail = $stickyManager->get(array(array('id', $id)));
            if(!$detail)
                return $this->errorResponse('Sticky not found', HttpStatusHelper::HTTP_NOT_FOUND);

            $sticky = $detail[0];
            $param = array(
                'name'      => Validator::validate($post, 'name', null, 'empty')?$post['name']:null,
                'message'   => Validator::validate($post, 'message', null, 'empty')?$post['message']:null,
                'position'  => Validator::validate($post, 'position', null, 'empty')?$post['position']:null,
                'user_log'  => $this->user->getUsername()?:'ANONYMOUS',
            );
            $newSticky = $stickyManager->update($sticky, $param);
            if(!$newSticky)
                return $this->errorResponse('Update sticky failed, Please try again later', HttpStatusHelper::HTTP_EXPECTATION_FAILED);

            return $this->successResponse(array(
                'sticky'=> $stickyManager->serialize($newSticky),
            ), HttpStatusHelper::HTTP_ACCEPTED);
        }catch(\Exception $e){
            $this->container->get('logger')->error(sprintf($e->getMessage()));
            return $this->errorResponse('Update sticky failed, Please try again later', HttpStatusHelper::HTTP_PRECONDITION_FAILED);
        }
    }

    /**
     * @ApiDoc(
     *      section="INALIX",
     *      resource="Sticky",
     *      description="Delete sticky",
     *      statusCodes={
     *          204="Returned when successful",
     *          400="Bad request",
     *          500="System error",
     *      }
     * )
     */
    public function deleteAction(Request $request, $id){
        try{
            $this->init();

            /* @var $stickyManager \APIBundle\Manager\stickyManager */
            $stickyManager = $this->container->get('api.manager.sticky');

            $detail = $stickyManager->get(array(array('id', $id)));
            if(!$detail)
                return $this->errorResponse('Sticky not found', HttpStatusHelper::HTTP_NOT_FOUND);

            $stickyManager->setUser($this->user->getUsername()?:'ANONYMOUS');
            $stickyManager->delete($detail[0]);

            return $this->successResponse(array(), HttpStatusHelper::HTTP_NO_CONTENT);
        }catch(\Exception $e){
            $this->container->get('logger')->error(sprintf($e->getMessage()));
            return $this->errorResponse('Delete sticky failed, Please try again later', HttpStatusHelper::HTTP_PRECONDITION_FAILED);
        }
    }
}
?>
