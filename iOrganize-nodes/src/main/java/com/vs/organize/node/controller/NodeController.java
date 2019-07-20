package com.vs.organize.node.controller;

import com.vs.organize.node.domains.NodeDomain;
import com.vs.organize.node.forms.GroupForm;
import com.vs.organize.node.forms.NodeForm;
import com.vs.organize.node.service.NodeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;

@Controller
@RequestMapping("/node-api")
public class NodeController {
  @Autowired
  private NodeService nodeService;

  @RequestMapping("/get-create")
  public String getCreateNode(@ModelAttribute GroupForm group, Model model) {
    NodeForm nodeForm = new NodeForm();
    nodeForm.setBoardId(group.getBoardId());
    nodeForm.setGroupId(group.getGroupId());
    model.addAttribute("node", nodeForm);
    return "createNode";
  }

  @RequestMapping("/create")
  public String createNode(@ModelAttribute NodeForm node, ModelAndView model) {
    NodeDomain nodeDomain = nodeService.create(node);
    model.addObject("mode", nodeDomain);
    return "node";
  }

}
