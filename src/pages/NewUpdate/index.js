import { Link, useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import api from '../../services/api';

export default function NewUpdate(){

  const[url, setUrl] = useState('');
  const[description, setDescription] = useState('');
  const navigate = useNavigate();

  // website_id definido na rota Newupdate
  const{website_id} = useParams();

  // recebe eventos do formulario
  async function saveOrUpdate(e){

    e.preventDefault();

    const data = {url, description};

    if (website_id === '0') {
      try {
        await api.post('api/v1/websites', data, {});
        navigate('/');
      } catch (error) {
        alert('erro ao salvar');        
      }      
    } else {
      try {
        await api.patch(`api/v1/websites/${website_id}`,data,{});
        navigate('/');
      } catch (error) {
        alert('erro ao atualizar');        
      }      
    }
  }

  // carrega registros da api e seta dados para atualização
  async function loadWebsite(){
    try {
      const response = await api.get(`api/v1/websites/${website_id}`,{});
      setUrl(response.data.url);
      setDescription(response.data.description);
    } catch (error) {
      alert('erro ao buscar registro');
      navigate('/');      
    }
  }

  // chama loadWebsite e preenche form
  useEffect(() => {
    if (website_id === '0') {
      return;      
    } else {
      loadWebsite();      
    }
  }, [website_id]);

  return(

    <div data-testid="mycard" className="card border-primary" style={{marginTop: '20px'}} >
      <div className="card-header bg-primary" style={{color: '#fff'}}>
        Websites Crud
      </div>
      <div className="card-body">

        <Link data-testid="mylink" className="btn btn-dark" 
        style={{marginBottom: '5px'}} to="/">Home</Link>

        <form data-testid="myform" onSubmit={saveOrUpdate}>

          <div className="form-group">
            <label htmlFor="url">URL</label>
            <input data-testid="input1" id="url" type="text" 
            style={{marginBottom: '20px'}} className="form-control" 
            placeholder="URL" value={url}
            onChange={e => setUrl(e.target.value)}></input>
          </div>

          <div className="form-group">
            <label htmlFor="description">Descrição</label>
            <input data-testid="input2" id="description" type="text" 
            style={{marginBottom: '20px'}} className="form-control" 
            placeholder="Descrição" value={description}
            onChange={e => setDescription(e.target.value)}></input>
          </div>

          <button data-testid="btnenviar" type="submit" className="btn btn-primary">Enviar</button>

        </form>

      </div>
    </div>

  );

}