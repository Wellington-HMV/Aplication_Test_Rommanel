using FluentValidation;
using Microsoft.Extensions.DependencyInjection;
using Rommanel.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Rommanel.API
{
    public class  Validators
    {
       public static void ValidatorsApp(IServiceCollection services)
        {
            services.AddTransient<IValidator<Address>, AddressValidator>();
            services.AddTransient<IValidator<Register>, RegisterValidator>();
        }
    }
}
