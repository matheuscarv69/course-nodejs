import StartUp from './startUp';

let port = process.env.PORT || '3050';

StartUp.app.listen(port, function () {
  console.log(`Server executing in port: ${port}`);
})

