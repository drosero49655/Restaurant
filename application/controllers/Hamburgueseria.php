<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Hamburgueseria extends CI_Controller {


	/*Controlador que carga las páginas de la hamburgueseria
	 */
	public function index()
	{
    echo "Hamburgueseria";
    }
    public function view($pagina = 'inicio')
    {
    /*echo "Ensayo";*/

    if(!file_exists(APPPATH.'views/Hamburgueseria/'.$pagina.'.php')){
        //Mensaje de error
        show_404();
    }
    else{
    $data['title']=ucfirst($pagina);

    $this->load->helper('url');
    $this->load->library('template');
    $this->template->load('basic_template','Hamburgueseria/'.$pagina, $data);

    /*$this->load->view('Hamburgueseria/'.$pagina, $data);*/
    }
    }
}
