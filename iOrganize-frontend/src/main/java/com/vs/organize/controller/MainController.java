package com.vs.organize.controller;

import com.vs.organize.node.forms.NodeForm;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class MainController {

  @RequestMapping({"/", "/index"})
  public String index(Model model) {
    return "index";
  }

}