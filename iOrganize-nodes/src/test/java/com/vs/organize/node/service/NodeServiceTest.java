package com.vs.organize.node.service;

import com.vs.organize.node.database.GroupRepository;
import com.vs.organize.node.database.NodeRepository;
import com.vs.organize.node.domains.GroupDomain;
import com.vs.organize.node.domains.NodeDomain;
import com.vs.organize.node.forms.GroupForm;
import org.junit.Before;
import org.junit.Test;
import org.mockito.Mockito;
import org.w3c.dom.NodeList;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.Optional;

import static org.junit.Assert.*;

/**
 * Created by root on 25.07.19.
 */
public class NodeServiceTest {
  private NodeService nodeService;
  private List<NodeDomain> nodes;

  @Before
  public void setUp() throws Exception {
    nodeService = new NodeService();
    nodes = new ArrayList<>(Arrays.asList(new NodeDomain(1), new NodeDomain(2), new NodeDomain(3)));
    NodeRepository nodeRepository = Mockito.mock(NodeRepository.class);
    Mockito.when(nodeRepository.findById(Mockito.any())).thenReturn(Optional.of(new NodeDomain(4l)));
    nodeService.setNodeRepository(nodeRepository);
  }

  @Test
  public void updateGroup_sort() throws Exception {
    List<NodeDomain> nodeList = nodeService.getNodeList(nodes, Arrays.asList(1l, 3l, 2l));
    assertEquals(3, nodeList.size());
    assertEquals(1l, nodeList.get(0).getId());
    assertEquals(3l, nodeList.get(1).getId());
    assertEquals(2l, nodeList.get(2).getId());
  }

  @Test
  public void updateGroup_delete() throws Exception {
    List<NodeDomain> nodeList = nodeService.getNodeList(nodes, Arrays.asList(1l, 3l));
    assertEquals(2, nodeList.size());
    assertEquals(1l, nodeList.get(0).getId());
    assertEquals(3l, nodeList.get(1).getId());
  }

  @Test
  public void updateGroup_add() throws Exception {
    List<NodeDomain> nodeList = nodeService.getNodeList(nodes, Arrays.asList(1l, 2l, 3l,4l));
    assertEquals(4, nodeList.size());
    assertEquals(1l, nodeList.get(0).getId());
    assertEquals(2l, nodeList.get(1).getId());
    assertEquals(3l, nodeList.get(2).getId());
    assertEquals(4l, nodeList.get(3).getId());
  }
}