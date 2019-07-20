package com.vs.organize.node.database;

import com.vs.organize.node.domains.BoardDomain;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface BoardRepository extends CrudRepository<BoardDomain, Long> {
}
