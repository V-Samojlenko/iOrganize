package com.vs.organize.node.database;

import com.vs.organize.node.domains.GroupDomain;
import com.vs.organize.node.domains.NodeDomain;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface GroupRepository extends JpaRepository<GroupDomain, Long> {
  GroupDomain findByNodesContaining(NodeDomain nodeDomain);
}
