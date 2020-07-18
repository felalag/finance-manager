package by.felalag.financemanagerapi.repository;

import by.felalag.financemanagerapi.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, Long> {

    User findByUsername(String username);
}
