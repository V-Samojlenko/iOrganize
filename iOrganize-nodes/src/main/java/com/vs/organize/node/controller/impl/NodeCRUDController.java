package com.vs.organize.node.controller.impl;

import com.vs.organize.node.controller.BaseCRUDController;
import com.vs.organize.node.domains.NodeDomain;
import com.vs.organize.node.forms.NodeForm;
import com.vs.organize.node.service.CRUDService;
import com.vs.organize.node.service.impl.NodeCRUDService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/node-api/node")
public class NodeCRUDController extends BaseCRUDController<NodeDomain, NodeForm> {
  @Autowired
  private NodeCRUDService service;

  @Override
  protected CRUDService<NodeDomain, NodeForm> getService() {
    return service;
  }
}
