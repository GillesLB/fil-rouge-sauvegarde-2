package co.simplon.filrouge.repository;


import co.simplon.filrouge.modele.Weapon;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.stereotype.Repository;

// va donner les méthodes du CRUD à la table concernée
@Repository
public interface WeaponRepository extends JpaRepository<Weapon, Long>, JpaSpecificationExecutor<Weapon>{}
