package com.vs.organize.node.controller.impl;

import com.vs.organize.node.controller.BaseCRUDController;
import com.vs.organize.node.domains.BoardDomain;
import com.vs.organize.node.forms.BoardForm;
import com.vs.organize.node.service.impl.BoardCRUDService;
import com.vs.organize.node.service.CRUDService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/node-api/board")
public class BoardCRUDController extends BaseCRUDController<BoardDomain, BoardForm> {
  @Autowired
  private BoardCRUDService service;

  @Override
  protected CRUDService<BoardDomain, BoardForm> getService() {
    return service;
  }
}
