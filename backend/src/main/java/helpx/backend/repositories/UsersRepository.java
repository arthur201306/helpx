/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Interface.java to edit this template
 */
package helpx.backend.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import helpx.backend.entities.Users;

/**
 *
 * @author arthu
 */
public interface UsersRepository extends JpaRepository<Users, String>{}
