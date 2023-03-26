import React, {useState, useEffect} from "react";
import './style.css';

function UserList(){
  
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);

  // função para buscar a lista de usuários da API
  const fetchUsers = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/users").catch(error => {
      console.error(error); // exibindo log em caso de erro
    });
    const data = await response.json();
    setUsers(data);
  };

  // função para buscar os detalhes de um usuário selecionado
  const fetchUserDetails = async (userId) => {
    const response = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`).catch(error => {
      console.error(error); // exibindo log em caso de erro
    });
    const data = await response.json();
    setSelectedUser(data);
  };

  // função para selecionar um usuário e buscar seus detalhes
  const handleUserSelect = (userId) => {
    setSelectedUser(users.find((user) => user.id === userId));
    fetchUserDetails(userId);
  };


  useEffect(() => {
    fetchUsers();
  }, []);

  // retorna a lista de usuarios
  if (!selectedUser) {
    return (
        <ul>
          {users.map((user) => (
            <li key={user.id} className="user-card">
              <h3 className="user-card h3">{user.name}</h3>
              <p className="user-card p">{user.email}</p>
              <button className="user-card button" onClick={() => handleUserSelect(user.id)}>Ver detalhes</button>
            </li>
          ))}
        </ul>
    );
  }

  // retorna o usuário selecionado
  if (selectedUser) {
    return (
    <div>
      <ul>
        <li className="user-card">
        <button onClick={() => setSelectedUser(null)}>Voltar para lista de usuários</button>
        <h2 className="user-card h2">{selectedUser.name}</h2>
        <p className="user-details p">Username: {selectedUser.username}</p>
        <p className="user-details p">Email: {selectedUser.email}</p>
        <p className="user-details p">Telefone: {selectedUser.phone}</p>
        <p className="user-details p">Website: {selectedUser.website}</p>
        <h3 className="user-details h3">Endereço</h3>
        <p className="user-details p">
        Rua: {selectedUser.address.street}, {selectedUser.address.suite}
        </p>
        <p className="user-details p">
        Cidade: {selectedUser.address.city}
        </p>
        <p className="user-details p">
        CEP: {selectedUser.address.zipcode}
        </p>
        <p className="user-details p"> Latitude: {selectedUser.address.geo.lat}, Longitude: {selectedUser.address.geo.lng}</p>
        <h3 className="user-details h3">Empresa</h3>
        <p className="user-details p">Razão social: {selectedUser.company.name}</p>
        <p className="user-details p">Slogan: {selectedUser.company.catchPhrase}</p>
        <p className="user-details p">B.S.: {selectedUser.company.bs}</p>
        </li>
      </ul>
    </div>
    );
  }


}

export default UserList;