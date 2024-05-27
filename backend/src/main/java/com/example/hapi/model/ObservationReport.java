package com.example.hapi.model;

import java.util.List;

public class ObservationReport {

    private String resourceType;
    private String id;
    private Meta meta;
    private Text text;
    private List<Identifier> identifier;
    private String status;
    private List<Category> category;
    private Code code;
    private Subject subject;
    private String effectiveDateTime;
    private String issued;
    private List<Performer> performer;
    private ValueQuantity valueQuantity;
    private List<Note> note;
    private Device device;

    // Getter and Setter methods

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

    public Meta getMeta() {
        return meta;
    }

    public void setMeta(Meta meta) {
        this.meta = meta;
    }

    public Text getText() {
        return text;
    }

    public void setText(Text text) {
        this.text = text;
    }

    public List<Identifier> getIdentifier() {
        return identifier;
    }

    public void setIdentifier(List<Identifier> identifier) {
        this.identifier = identifier;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    public List<Category> getCategory() {
        return category;
    }

    public void setCategory(List<Category> category) {
        this.category = category;
    }

    public Code getCode() {
        return code;
    }

    public void setCode(Code code) {
        this.code = code;
    }

    public Subject getSubject() {
        return subject;
    }

    public void setSubject(Subject subject) {
        this.subject = subject;
    }

    public String getEffectiveDateTime() {
        return effectiveDateTime;
    }

    public void setEffectiveDateTime(String effectiveDateTime) {
        this.effectiveDateTime = effectiveDateTime;
    }

    public String getIssued() {
        return issued;
    }

    public void setIssued(String issued) {
        this.issued = issued;
    }

    public List<Performer> getPerformer() {
        return performer;
    }

    public void setPerformer(List<Performer> performer) {
        this.performer = performer;
    }

    public ValueQuantity getValueQuantity() {
        return valueQuantity;
    }

    public void setValueQuantity(ValueQuantity valueQuantity) {
        this.valueQuantity = valueQuantity;
    }

    public List<Note> getNote() {
        return note;
    }

    public void setNote(List<Note> note) {
        this.note = note;
    }

    public Device getDevice() {
        return device;
    }

    public void setDevice(Device device) {
        this.device = device;
    }

    // Nested classes for inner objects

    public static class Meta {
        private String versionId;
        private String lastUpdated;
        private String source;

        // Getter and Setter methods
        public String getVersionId() {
            return versionId;
        }

        public void setVersionId(String versionId) {
            this.versionId = versionId;
        }

        public String getLastUpdated() {
            return lastUpdated;
        }

        public void setLastUpdated(String lastUpdated) {
            this.lastUpdated = lastUpdated;
        }

        public String getSource() {
            return source;
        }

        public void setSource(String source) {
            this.source = source;
        }
    }

    public static class Text {
        private String status;
        private String div;

        // Getter and Setter methods
        public String getStatus() {
            return status;
        }

        public void setStatus(String status) {
            this.status = status;
        }

        public String getDiv() {
            return div;
        }

        public void setDiv(String div) {
            this.div = div;
        }
    }

    public static class Identifier {
        private String use;
        private String value;
        private Assigner assigner;

        // Getter and Setter methods
        public String getUse() {
            return use;
        }

        public void setUse(String use) {
            this.use = use;
        }

        public String getValue() {
            return value;
        }

        public void setValue(String value) {
            this.value = value;
        }

        public Assigner getAssigner() {
            return assigner;
        }

        public void setAssigner(Assigner assigner) {
            this.assigner = assigner;
        }

        public static class Assigner {
            private String display;

            // Getter and Setter methods
            public String getDisplay() {
                return display;
            }

            public void setDisplay(String display) {
                this.display = display;
            }
        }
    }

    public static class Category {
        private List<Coding> coding;

        // Getter and Setter methods
        public List<Coding> getCoding() {
            return coding;
        }

        public void setCoding(List<Coding> coding) {
            this.coding = coding;
        }

        public static class Coding {
            private String system;
            private String code;
            private String display;

            // Getter and Setter methods
            public String getSystem() {
                return system;
            }

            public void setSystem(String system) {
                this.system = system;
            }

            public String getCode() {
                return code;
            }

            public void setCode(String code) {
                this.code = code;
            }

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

        // Getter and Setter methods
        public List<Coding> getCoding() {
            return coding;
        }

        public void setCoding(List<Coding> coding) {
            this.coding = coding;
        }

        public static class Coding {
            private String system;
            private String code;

            // Getter and Setter methods
            public String getSystem() {
                return system;
            }

            public void setSystem(String system) {
                this.system = system;
            }

            public String getCode() {
                return code;
            }

            public void setCode(String code) {
                this.code = code;
            }
        }
    }

    public static class Subject {
        private String id;
        private String reference;
        private String display;

        // Getter and Setter methods
        public String getId() {
            return id;
        }

        public void setId(String id) {
            this.id = id;
        }

        public String getReference() {
            return reference;
        }

        public void setReference(String reference) {
            this.reference = reference;
        }

        public String getDisplay() {
            return display;
        }

        public void setDisplay(String display) {
            this.display = display;
        }
    }

    public static class Performer {
        private String id;
        private String reference;
        private String display;

        // Getter and Setter methods
        public String getId() {
            return id;
        }

        public void setId(String id) {
            this.id = id;
        }

        public String getReference() {
            return reference;
        }

        public void setReference(String reference) {
            this.reference = reference;
        }

        public String getDisplay() {
            return display;
        }

        public void setDisplay(String display) {
            this.display = display;
        }
    }

    public static class ValueQuantity {
        private double value;
        private String unit;
        private String system;
        private String code;

        // Getter and Setter methods
        public double getValue() {
            return value;
        }

        public void setValue(double value) {
            this.value = value;
        }

        public String getUnit() {
            return unit;
        }

        public void setUnit(String unit) {
            this.unit = unit;
        }

        public String getSystem() {
            return system;
        }

        public void setSystem(String system) {
            this.system = system;
        }

        public String getCode() {
            return code;
        }

        public void setCode(String code) {
            this.code = code;
        }
    }

    public static class Note {
        private String authorString;
        private String text;

        // Getter and Setter methods
        public String getAuthorString() {
            return authorString;
        }

        public void setAuthorString(String authorString) {
            this.authorString = authorString;
        }

        public String getText() {
            return text;
        }

        public void setText(String text) {
            this.text = text;
        }
    }

    public static class Device {
        private String display;

        // Getter and Setter methods
        public String getDisplay() {
            return display;
        }

        public void setDisplay(String display) {
            this.display = display;
        }
    }
}