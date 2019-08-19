package com.vs.organize.node.service.impl;

import com.vs.organize.node.DatabaseConfiguration;
import com.vs.organize.node.domains.GroupDomain;
import com.vs.organize.node.forms.GroupForm;
import com.vs.organize.node.utils.NodeTransformer;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

import javax.transaction.Transactional;
import java.util.List;

import static com.vs.organize.node.test.DomainIdHolder.GROUP_SORT_NODES;
import static org.junit.Assert.assertEquals;

@RunWith(SpringRunner.class)
@SpringBootTest(classes = DatabaseConfiguration.class)
public class GroupCRUDServiceTest {
  @Autowired
  private GroupCRUDService service;

  @Test
  @Transactional
  public void updateGroup_sort() throws Exception {
    GroupDomain read = service.read(GROUP_SORT_NODES);
    GroupForm groupForm = NodeTransformer.transform(read);

    Long toMove = groupForm.getNodeIds().get(groupForm.getNodeIds().size() - 1);
    groupForm.getNodeIds().remove(groupForm.getNodeIds().size() - 1);
    groupForm.getNodeIds().add(0, toMove);

    GroupDomain update = service.update(groupForm);

    assertEquals(3, update.getNodes().size());
    for (int i = 0; i < update.getNodes().size(); i++) {
      assertEquals((long) groupForm.getNodeIds().get(i), update.getNodes().get(i).getId());
    }
  }
}