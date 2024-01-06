package helpx.backend.enums;

import com.fasterxml.jackson.annotation.JsonCreator;

public enum UserRole {
	TEC,
	USR,
	ADM;
	
	@JsonCreator
	public static UserRole fromString(String value) {
		for (UserRole role: UserRole.values()) {
			if (role.name().equalsIgnoreCase(value)) {
				return role;
			}
		}
		throw new IllegalArgumentException("Wrong role: " + value);
	}
}
