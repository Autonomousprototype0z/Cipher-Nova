public class CipherNova {

    // Character attributes
    private String name;
    private String role;
    private String power;
    private String catchphrase;

    // Constructor
    public CipherNova() {
        this.name = "CipherNova";
        this.role = "Guardian of Knowledge";
        this.power = "Reality Hack – Turns data into physical tools, constructs, or solutions instantly.";
        this.catchphrase = "The code isn’t the limit—it’s the key.";
    }

    // Display character details
    public void displayCharacter() {
        System.out.println("Character Name: " + name);
        System.out.println("Role: " + role);
        System.out.println("Power: " + power);
        System.out.println("Catchphrase: \"" + catchphrase + "\"");
    }

    // Simulate using the power
    public void usePower(String data) {
        System.out.println(name + " is processing data: " + data);
        System.out.println("Using Reality Hack to create a solution...");
        System.out.println("Solution created successfully!");
    }

    // Main method for testing
    public static void main(String[] args) {
        CipherNova cipherNova = new CipherNova();
        cipherNova.displayCharacter();
        cipherNova.usePower("Global climate data");
    }
}
