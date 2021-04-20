using FluentValidation;
using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Rommanel.Entities
{
    [Table("usr_registro")]
    public class Register
    {
        [Key]
        public int Id { get; set; }
        [Column("nome")]
        public string Name { get; set; }
        [Column("cpf_cnpj")]
        public string CpfCnpj { get; set; }
        [Column("data_nascimento")]
        public string BirthDate { get; set; }
        [Column("contato")]
        public string Contact { get; set; }
        [Column("email")]
        public string Email { get; set; }
    }

    public class RegisterValidator : AbstractValidator<Register>
    {
        public RegisterValidator()
        {
            RuleFor(x => x.Id).NotNull();
            RuleFor(x => x.Name).NotNull().WithMessage("Preencha o Nome");
            RuleFor(x => x.CpfCnpj).NotNull().WithMessage("Preencha o CPF ou CNPJ");
            RuleFor(x => x.BirthDate).NotNull().WithMessage("Preencha a Data de Nascimento");
            RuleFor(x => ValidateAge(x.BirthDate)).InclusiveBetween(18, 60).WithMessage("Idade Inválida!");
            RuleFor(x => x.Contact).EmailAddress().WithMessage("Numero de contato Inválido!");
            RuleFor(x => x.Email).EmailAddress().WithMessage("Email Inválido!");
        }

        private int ValidateAge(string age)
        {
            var year = age.Substring(4, 4);
            var day = age.Substring(0, 2);
            var mounth = age.Substring(2, 2);

            var fullDate = day + "/" + mounth + "/" + year;

            var date = DateTime.ParseExact(fullDate, "dd/MM/yyyy", System.Globalization.CultureInfo.InvariantCulture);
            var dNow = DateTime.Now;

            var diff = dNow.Subtract(date);

            return diff.Days / 365;
        }
    }
}
