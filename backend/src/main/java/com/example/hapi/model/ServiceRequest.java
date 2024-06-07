package com.example.hapi.model;

import java.util.List;

public class ServiceRequest {
    private String resourceType;
    private String id;
    private Text text;
    private List<Contained> contained;
    private String status;
    private String intent;
    private List<Category> category;
    private String priority;
    private Code code;
    private Requester requester;
    private Subject subject;
    private List<Performer> performer;
    private List<Note> note;

    // Getters and Setters for all fields
    public String getResourceType() {
        return resourceType;
    }

    public void setResourceType(String resourceType) {
        this.resourceType = resourceType;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public Text getText() {
        return text;
    }

    public void setText(Text text) {
        this.text = text;
    }

    public List<Contained> getContained() {
        return contained;
    }

    public void setContained(List<Contained> contained) {
        this.contained = contained;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    public String getIntent() {
        return intent;
    }

    public void setIntent(String intent) {
        this.intent = intent;
    }

    public List<Category> getCategory() {
        return category;
    }

    public void setCategory(List<Category> category) {
        this.category = category;
    }

    public String getPriority() {
        return priority;
    }

    public void setPriority(String priority) {
        this.priority = priority;
    }

    public Code getCode() {
        return code;
    }

    public void setCode(Code code) {
        this.code = code;
    }

    public Requester getRequester() {
        return requester;
    }

    public void setRequester(Requester requester) {
        this.requester = requester;
    }

    public Subject getSubject() {
        return subject;
    }

    public void setSubject(Subject subject) {
        this.subject = subject;
    }

    public List<Performer> getPerformer() {
        return performer;
    }

    public void setPerformer(List<Performer> performer) {
        this.performer = performer;
    }

    public List<Note> getNote() {
        return note;
    }

    public void setNote(List<Note> note) {
        this.note = note;
    }

    // Nested classes for complex fields
    public static class Text {
        private String div;

        // Getters and Setters
        public String getDiv() {
            return div;
        }

        public void setDiv(String div) {
            this.div = div;
        }
    }

    public static class Contained {
        private String resourceType;
        private String id;
        private Type type;
        private Subject subject;

        // Getters and Setters
        public String getResourceType() {
            return resourceType;
        }

        public void setResourceType(String resourceType) {
            this.resourceType = resourceType;
        }

        public String getId() {
            return id;
        }

        public void setId(String id) {
            this.id = id;
        }

        public Type getType() {
            return type;
        }

        public void setType(Type type) {
            this.type = type;
        }

        public Subject getSubject() {
            return subject;
        }

        public void setSubject(Subject subject) {
            this.subject = subject;
        }

        public static class Type {
            private List<Coding> coding;

            // Getters and Setters
            public List<Coding> getCoding() {
                return coding;
            }

            public void setCoding(List<Coding> coding) {
                this.coding = coding;
            }

            public static class Coding {
                private String display;

                // Getters and Setters
                public String getDisplay() {
                    return display;
                }

                public void setDisplay(String display) {
                    this.display = display;
                }
            }
        }
    }

    public static class Category {
        private List<Coding> coding;

        // Getters and Setters
        public List<Coding> getCoding() {
            return coding;
        }

        public void setCoding(List<Coding> coding) {
            this.coding = coding;
        }

        public static class Coding {
            private String display;

            // Getters and Setters
            public String getDisplay() {
                return display;
            }

            public void setDisplay(String display) {
                this.display = display;
            }
        }
    }

    public static class Code {
        private List<Coding> coding;

        // Getters and Setters
        public List<Coding> getCoding() {
            return coding;
        }

        public void setCoding(List<Coding> coding) {
            this.coding = coding;
        }

        public static class Coding {
            private String display;

            // Getters and Setters
            public String getDisplay() {
                return display;
            }

            public void setDisplay(String display) {
                this.display = display;
            }
        }
    }

    public static class Requester {
        private String reference;

        // Getters and Setters
        public String getReference() {
            return reference;
        }

        public void setReference(String reference) {
            this.reference = reference;
        }
    }

    public static class Subject {
        private String reference;

        // Getters and Setters
        public String getReference() {
            return reference;
        }

        public void setReference(String reference) {
            this.reference = reference;
        }
    }

    public static class Performer {
        private String reference;

        // Getters and Setters
        public String getReference() {
            return reference;
        }

        public void setReference(String reference) {
            this.reference = reference;
        }
    }

    public static class Note {
        private String text;

        // Getters and Setters
        public String getText() {
            return text;
        }

        public void setText(String text) {
            this.text = text;
        }
    }
}
