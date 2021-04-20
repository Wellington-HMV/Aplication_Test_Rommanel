using FluentValidation;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Rommanel.Entities
{
    [Table("usr_endereco")]
    public class Address
    {
        [Key]
        public int Id { get; set; }
        [Column("id_registro")]
        public int IdRecord { get; set; }
        [Column("cep")]
        public string Cep { get; set; }
        [Column("rua")]
        public string Road { get; set; }
        [Column("numero")]
        public string Number { get; set; }
        [Column("bairro")]
        public string District { get; set; }
        [Column("cidade")]
        public string City { get; set; }
        [Column("estado")]
        public string State { get; set; }
    }

    public class AddressValidator: AbstractValidator<Address>
    {
        public AddressValidator()
        {
            RuleFor(x => x.Id).NotNull();
            RuleFor(x => x.IdRecord).NotNull();
            RuleFor(x => x.Cep).NotNull().WithMessage("Preencha o Cep");
            RuleFor(x => x.Road).NotNull().WithMessage("Preencha a Rua");
            RuleFor(x => x.Number).NotNull().WithMessage("Preencha o Numero do Endereço");
            RuleFor(x => x.District).NotNull().WithMessage("Preencha o Bairro");
            RuleFor(x => x.City).NotNull().WithMessage("Preencha a Cidade");
            RuleFor(x => x.State).NotNull().WithMessage("Preencha o Estado");
        }
    }
}
