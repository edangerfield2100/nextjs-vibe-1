package com.example.menuservice.controllers;

import com.example.menuservice.models.MenuOption;
import com.example.menuservice.services.MenuService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/menu")
@CrossOrigin(origins = "*")
public class MenuController {

    private final MenuService menuService;

    @Autowired
    public MenuController(MenuService menuService) {
        this.menuService = menuService;
    }

    @GetMapping("/options")
    public ResponseEntity<List<MenuOption>> getAllMenuOptions() {
        List<MenuOption> menuOptions = menuService.getAllMenuOptions();
        return ResponseEntity.ok(menuOptions);
    }

    @GetMapping("/options/type/{type}")
    public ResponseEntity<List<MenuOption>> getMenuOptionsByType(@PathVariable String type) {
        List<MenuOption> menuOptions = menuService.getMenuOptionsByType(type);
        return ResponseEntity.ok(menuOptions);
    }

    @GetMapping("/options/{id}")
    public ResponseEntity<MenuOption> getMenuOptionById(@PathVariable Long id) {
        MenuOption menuOption = menuService.getMenuOptionById(id);
        if (menuOption != null) {
            return ResponseEntity.ok(menuOption);
        } else {
            return ResponseEntity.notFound().build();
        }
    }
}
