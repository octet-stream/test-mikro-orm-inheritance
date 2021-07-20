### Install and run

1. Clone this repo
2. Install dependencies
3. Run either `npm dev` or `dev-with-dates`

### What's the issue?

Run the `npm dev` script first, it should run sucessfully. It is using simple inheritance: `BaseEntity` => `File`

But the `npm dev-with-dates` will fail with the following error:

```
MetadataError: Metadata for entity BaseEntity not found
```

In this example I'm using another abstract class in between `File` and `BaseEntity`, so the full inheritance looks like this: `BaseEntity` => `BaseEntityWithDates` => `File`
