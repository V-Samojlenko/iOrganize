package com.vs.organize.node;

import com.vs.organize.node.database.BoardRepository;
import com.vs.organize.node.domains.BoardDomain;
import com.vs.organize.node.domains.GroupDomain;
import com.vs.organize.node.domains.NodeDomain;
import org.springframework.beans.factory.InitializingBean;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Profile;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

import java.util.Arrays;


@Configuration
@EnableJpaRepositories
public class DatabaseConfiguration {

  @Profile("in-memory")
  @Bean
  public BoardDomain addTestBoard(BoardRepository boardRepository){
    BoardDomain boardDomain = new BoardDomain();
    boardDomain.setName("Test Board");
    boardDomain.setGroups(Arrays.asList(
            new GroupDomain(Arrays.asList(new NodeDomain("First node","my text"),new NodeDomain("Second node","my text"))),
            new GroupDomain(Arrays.asList(new NodeDomain("Third node","my text"),new NodeDomain("Forth node","my text")))));
    boardRepository.save(boardDomain);
    return boardDomain;
  }

}