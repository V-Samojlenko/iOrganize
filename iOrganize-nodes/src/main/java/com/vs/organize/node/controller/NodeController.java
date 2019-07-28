package com.vs.organize.node.controller;

import com.google.gson.Gson;
import com.vs.organize.node.domains.BoardDomain;
import com.vs.organize.node.domains.GroupDomain;
import com.vs.organize.node.domains.NodeDomain;
import com.vs.organize.node.forms.GroupForm;
import com.vs.organize.node.forms.NodeForm;
import com.vs.organize.node.service.NodeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.ModelAndView;

import javax.servlet.http.HttpServletRequest;

@Controller
@RequestMapping("/node-api")
public class NodeController {
  @Autowired
  private NodeService nodeService;

  @PostMapping(value = "/node",produces = MediaType.APPLICATION_JSON_VALUE, consumes = MediaType.APPLICATION_JSON_VALUE)
  @ResponseBody
  public String createNode(@RequestBody NodeForm node) {
    NodeDomain nodeDomain = nodeService.create(node);
    return new Gson().toJson(nodeDomain);
  }
  @DeleteMapping(value = "/node",produces = MediaType.APPLICATION_JSON_VALUE)
  @ResponseBody
  public String deleteNode(@RequestParam long id) {
    NodeDomain nodeDomain = nodeService.delete(id);
    return new Gson().toJson(nodeDomain);
  }

  @GetMapping(value = "/board", produces = MediaType.APPLICATION_JSON_VALUE)
  @ResponseBody
  public String getBoard(@RequestParam long id) {
    return new Gson().toJson(nodeService.getBoard(id));
  }

  @PutMapping(value = "/group", produces = MediaType.APPLICATION_JSON_VALUE, consumes = MediaType.APPLICATION_JSON_VALUE)
  @ResponseBody
  public String putGroup(@RequestBody GroupForm groupForm, HttpServletRequest request) {
    return new Gson().toJson(nodeService.updateGroup(groupForm));
  }
}
