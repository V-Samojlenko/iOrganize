package com.vs.organize.node.controller;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.test.web.servlet.MockMvc;

import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.content;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@RunWith(SpringRunner.class)
@SpringBootTest
@AutoConfigureMockMvc
public class MainControllerTest {
  @Autowired
  private MockMvc mvc;

  @Test
  public void index() throws Exception {
    this.mvc.perform(get("/")).andExpect(status().isOk())
            .andExpect(content().string(org.hamcrest.Matchers.containsString("Hello World!")));
    this.mvc.perform(get("/index")).andExpect(status().isOk())
            .andExpect(content().string(org.hamcrest.Matchers.containsString("Hello World!")));
  }
}