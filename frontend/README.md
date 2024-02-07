# Quick Overview




# Custom Helpers

## Form
### Example
``` ts
const formik = useFormik({
   initialValues: user,
   onSubmit: submitActionHandler, // Logic here for Save
   enableReinitialize: true,
})
<Form formik={formik}>
   <TextField id="id" disabled /> // Pass the Name of a Field into Id
   <TextField id="email" />
   <TextField id="firstName" />
   <TextField id="lastName" />
   <FormButton>Save</FormButton>
</Form>
```

## Card
### Example
``` ts
<Card
   handleEdit={handleEdit}
   handleDelete={handleDelete}
   id={reminder.id}
>
   <CardTitle>{reminder.title}</CardTitle>
   <CardBody>{reminder.description}</CardBody>
</Card>
```

