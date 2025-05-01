// Simulated data (replace with DB in real apps)
let users = [
    { id: 1, name: 'Alice' },
    { id: 2, name: 'Bob' }
  ];
   
  // Get all users
  exports.getAllUsers = (req, res) => {
    res.json(users);
  };
   
  // Create a new user
  exports.createUser = (req, res) => {
    const { name } = req.body;
    const newUser = {
      id: users.length + 1,
      name
    };
    users.push(newUser);
    res.status(201).json(newUser);
  };
   
  // Get user by ID
  exports.getUserById = (req, res) => {
    const id = parseInt(req.params.id);
    const user = users.find(u => u.id === id);
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    res.json(user);
  };