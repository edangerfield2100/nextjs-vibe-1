package com.example.menuservice.services;

import com.example.menuservice.models.MenuOption;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

@Service
public class MenuService {
    
    private final List<MenuOption> menuOptions;

    public MenuService() {
        // Initialize with some sample data
        this.menuOptions = new ArrayList<>();
        initializeSampleData();
    }

    private void initializeSampleData() {
        menuOptions.add(new MenuOption(1L, "Margherita Pizza", "Fresh tomatoes, mozzarella, basil", "PIZZA", 12.99, true));
        menuOptions.add(new MenuOption(2L, "Pepperoni Pizza", "Pepperoni, mozzarella, tomato sauce", "PIZZA", 14.99, true));
        menuOptions.add(new MenuOption(3L, "Caesar Salad", "Romaine lettuce, parmesan, croutons", "SALAD", 8.99, true));
        menuOptions.add(new MenuOption(4L, "Greek Salad", "Mixed greens, feta, olives, tomatoes", "SALAD", 9.99, true));
        menuOptions.add(new MenuOption(5L, "Chicken Burger", "Grilled chicken breast, lettuce, tomato", "BURGER", 11.99, true));
        menuOptions.add(new MenuOption(6L, "Beef Burger", "Beef patty, cheese, lettuce, tomato", "BURGER", 13.99, true));
        menuOptions.add(new MenuOption(7L, "Coca Cola", "330ml can", "BEVERAGE", 2.99, true));
        menuOptions.add(new MenuOption(8L, "Orange Juice", "Fresh squeezed", "BEVERAGE", 3.99, true));
        menuOptions.add(new MenuOption(9L, "Chocolate Cake", "Rich chocolate layer cake", "DESSERT", 6.99, true));
        menuOptions.add(new MenuOption(10L, "Tiramisu", "Classic Italian dessert", "DESSERT", 7.99, false));
    }

    public List<MenuOption> getAllMenuOptions() {
        return new ArrayList<>(menuOptions);
    }

    public List<MenuOption> getMenuOptionsByType(String type) {
        return menuOptions.stream()
                .filter(menuOption -> menuOption.getType().equalsIgnoreCase(type))
                .collect(Collectors.toList());
    }

    public MenuOption getMenuOptionById(Long id) {
        return menuOptions.stream()
                .filter(menuOption -> menuOption.getId().equals(id))
                .findFirst()
                .orElse(null);
    }
}
