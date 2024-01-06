package helpx.backend.controllers.records;

import helpx.backend.enums.UserRole;

public record RequestUsers(String email, String password, String username, UserRole roles) {

}
