package com.vs.organize.node.service;

public interface CRUDService<T, N> {
  T create(N form);

  T read(long id);

  T update(N form);

  void delete(long id);
}
