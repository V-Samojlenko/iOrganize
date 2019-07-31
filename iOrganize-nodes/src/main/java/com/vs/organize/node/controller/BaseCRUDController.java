package com.vs.organize.node.controller;

import com.google.gson.Gson;
import com.vs.organize.node.service.CRUDService;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;

public abstract class BaseCRUDController<T, N> implements CRUDController<N> {
  private Gson gson = new Gson();

  @PostMapping(produces = MediaType.APPLICATION_JSON_VALUE, consumes = MediaType.APPLICATION_JSON_VALUE)
  @ResponseBody
  public String create(@RequestBody N form) {
    return gson.toJson(getService().create(form));
  }

  @GetMapping(produces = MediaType.APPLICATION_JSON_VALUE)
  @ResponseBody
  public String read(long id) {
    return gson.toJson(getService().read(id));
  }

  @PutMapping(produces = MediaType.APPLICATION_JSON_VALUE, consumes = MediaType.APPLICATION_JSON_VALUE)
  @ResponseBody
  public String update(@RequestBody N form) {
    return gson.toJson(getService().update(form));
  }

  @DeleteMapping(produces = MediaType.APPLICATION_JSON_VALUE)
  @ResponseBody
  public String delete(long id) {
    getService().delete(id);
    return "{\"state\":\"ok\"}";
  }

  protected abstract CRUDService<T, N> getService();
}
