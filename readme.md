### Installation

1. Clone this repo
2. Install dependencies

### What's the issue?

1. Run the `npm dev` script first, it should run sucessfully. It is using simple inheritance: `BaseEntity` => `File`

2. But the `npm dev-with-dates` script will fail with the following error:

```
MetadataError: Metadata for entity BaseEntity not found
```

In this example I'm using another abstract class in between `File` and `BaseEntity`, so the full inheritance looks like this: `BaseEntity` => `BaseEntityWithDates` => `FileWithDates`
