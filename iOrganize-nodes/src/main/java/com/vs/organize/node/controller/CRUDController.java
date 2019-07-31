package com.vs.organize.node.controller;

public interface CRUDController<T> {

  String create(T form);

  String read(long id);

  String update(T form);

  String delete(long id);
}
