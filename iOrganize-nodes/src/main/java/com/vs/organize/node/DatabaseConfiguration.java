package com.vs.organize.node;

import com.vs.organize.node.database.BoardRepository;
import com.vs.organize.node.domains.BoardDomain;
import org.springframework.beans.factory.InitializingBean;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Profile;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;


@Configuration
@EnableJpaRepositories
public class DatabaseConfiguration {

  @Profile("in-memory")
  @Bean
  public BoardDomain addTestBoard(BoardRepository boardRepository){
    BoardDomain boardDomain = new BoardDomain();
    boardDomain.setId(0);
    boardDomain.setName("Test Board");
    boardRepository.save(boardDomain);
    return boardDomain;
  }

}
