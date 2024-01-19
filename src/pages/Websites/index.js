import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import api from '../../services/api';

export default function Websites(){

  const[my_websites, setWebsites] = useState([]);
  const navigate = useNavigate();

  // read, busca todos os registros na api
  useEffect(() => {
    api.get('api/v1/websites',{})
    .then(response => {setWebsites(response.data)})
  }, []);

  return(

    <div data-testid="mycard" className="card border-primary" style={{marginTop: '20px'}} >
      <div className="card-header bg-primary" style={{color: '#fff'}}>
        Websites Crud
      </div>
      <div className="card-body">

        <Link data-testid="mylink" className="btn btn-success" 
        style={{marginBottom: '10px'}} to="/newupdate/0">Novo</Link>

        <table data-testid="mytable" className="table table-hover">
          <thead>
            <tr>
              <th scope="col">Id</th>
              <th scope="col">URL</th>
              <th scope="col">Descrição</th>
              <th scope="col">Ações</th>
            </tr>
          </thead>
          <tbody>
            {my_websites.map(website => (
              <tr key={website.id}>
                <th scope="row">{website.id}</th>
                  <td>{website.url}</td>
                  <td>{website.description}</td>
                  <td>

                    <button data-testid="mybtn1" type="button"
                    className="btn btn-outline-info" style={{margin: '2px'}}>Editar</button>

                    <button data-testid="mybtn2" type="button"
                    className="btn btn-outline-danger" style={{margin: '2px'}}>Excluir</button>

                  </td>
              </tr>
            ))}
            
          </tbody>
        </table>

      </div>
    </div>

  );

}