package com.vs.organize.node.controller.impl;

import com.vs.organize.node.controller.BaseCRUDController;
import com.vs.organize.node.domains.GroupDomain;
import com.vs.organize.node.forms.GroupForm;
import com.vs.organize.node.service.CRUDService;
import com.vs.organize.node.service.impl.GroupCRUDService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/node-api/group")
public class GroupCRUDController extends BaseCRUDController<GroupDomain, GroupForm> {
  @Autowired
  private GroupCRUDService service;

  @Override
  protected CRUDService<GroupDomain, GroupForm> getService() {
    return service;
  }
}
