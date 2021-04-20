using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Rommanel.Entities;
using Rommanel.Service;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Rommanel.API.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class RegisterController : ControllerBase
    {
        [HttpGet("GetAll")]
        public async Task<ActionResult<List<RegisterViewModel>>> Get()
        {
            return await RegisterService.GetRegisterAllAsync();
        }

        [HttpPost("GetRegistry")]
        public async Task<ActionResult<Register>> GetRegistry([FromBody]LoginDto login)
        {
            return await RegisterService.GetRegisterAsync(login);
        }

        [HttpPost("Create")]
        public async Task<ActionResult<RegisterViewModel>> Create([FromBody] RegisterViewModel register)
        {
            return await RegisterService.Register(register);
        }

        [HttpDelete("Delete/{id}")]
        public ActionResult Delete([FromRoute]int id)
        {
            var result = RegisterService.Remove(id);
            if (result == 200)
            {
                return Ok();
            }
            else
            {
                return Problem("Failed Delete", statusCode: StatusCodes.Status400BadRequest);
            }
        }
    }
}
