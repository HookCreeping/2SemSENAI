﻿using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using webapi.healthclinic.tarde2.Domains;
using webapi.healthclinic.tarde2.Interfaces;
using webapi.healthclinic.tarde2.Repositories;

namespace webapi.healthclinic.tarde2.Controllers
{
    /// <summary>
    /// Controller de TipoUsuario
    /// </summary>
    [Route("api/[controller]")]
    [ApiController]
    [Produces("application/json")]
    public class TipoUsuarioController : ControllerBase
    {
        private ITipoUsuarioRepository tipoUsuarioRepository { get; set; }

        /// <summary>
        /// Usa o repositório TipoUsuario
        /// </summary>
        public TipoUsuarioController()
        {
            tipoUsuarioRepository = new TipoUsuarioRepository();
        }


        /// <summary>
        /// Cadastrar
        /// </summary>
        [HttpPost]
        public IActionResult Post(TipoUsuario tipoUsuario)
        {
            try
            {
                tipoUsuarioRepository.Cadastrar(tipoUsuario);

                return StatusCode(201);
            }
            catch (Exception e)
            {
                return BadRequest(e.Message);
            }
        }


        /// <summary>
        /// Listar
        /// </summary>
        [HttpGet]
        public IActionResult Get()
        {
            try
            {
                return Ok(tipoUsuarioRepository.Listar());
            }
            catch (Exception e)
            {
                return BadRequest(e.Message);
            }
        }


        /// <summary>
        /// Atualizar
        /// </summary>
        [HttpPut]
        public IActionResult Put(TipoUsuario tipoUsuario)
        {
            try
            {
                tipoUsuarioRepository.Atualizar(tipoUsuario.IdTipoUsuario, tipoUsuario);

                return Ok();
            }
            catch (Exception e)
            {
                return BadRequest(e.Message);
            }
        }


        /// <summary>
        /// Deletar
        /// </summary>
        [HttpDelete]
        public IActionResult Delete(Guid id)
        {
            try
            {
                tipoUsuarioRepository.Deletar(id);

                return StatusCode(204);
            }
            catch (Exception)
            {
                throw;
            }
        }
    }
}
