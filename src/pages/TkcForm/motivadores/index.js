import React from 'react';
import { useForm, useFieldArray, Controller } from 'react-hook-form';
import { Typography, InputBox, Button } from '../../../components/atoms';
import { QuestionContainer, ButtonsContainer, Container } from './styles';

const options = [
  { id: 1, value: 0, label: '0' },
  { id: 2, value: 1, label: '1' },
  { id: 3, value: 2, label: '2' },
  { id: 4, value: 3, label: '3' },
  { id: 5, value: 4, label: '4' },
];

const questions = [
  {
    id: 1,
    question: 'O que mais incentiva e estimula o meu desempenho é:',
    option1: {
      id: 1,
      value: 0,
      label:
        'Um salário compatível com as minhas necessidades básicas e as de minha família.',
    },
    option2: {
      id: 2,
      value: 0,
      label:
        'A oportunidade de testar a minha própria capacidade de ter acesso aos meus resultados.',
    },
  },
];

export default function Motivadores() {
  const { control, handleSubmit } = useForm({});

  const { fields, replace, append } = useFieldArray({
    control,
    name: 'motivadores',
  });

  React.useEffect(() => {
    questions.map(question => {
      append(question);
    });
  }, [append, replace]);

  const renderField = (item, index) => {
    return (
      <div style={{ marginTop: 32 }}>
        <Typography variant="regular" style={{ marginBottom: 8 }}>
          {item.question}
        </Typography>
        <table>
          <tr key={item.option1.id}>
            <th>
              <QuestionContainer key={item.id}>
                <Controller
                  rules={{ required: true }}
                  render={({ field }) => (
                    <InputBox options={options} {...field} />
                  )}
                  name={`motivadores.${index}.option1`}
                  control={control}
                />
                <Typography variant="regular">{item.option1.label}</Typography>
              </QuestionContainer>
            </th>
          </tr>
          <tr key={item.id}>
            <th>
              <QuestionContainer key={item.option2.id}>
                <Controller
                  rules={{ required: true }}
                  render={({ field }) => (
                    <InputBox options={options} {...field} />
                  )}
                  name={`motivadores.${index}.option2`}
                  control={control}
                />
                <Typography variant="regular">{item.option2.label}</Typography>
              </QuestionContainer>
            </th>
          </tr>
        </table>
      </div>
    );
  };

  const onSubmit = data => console.log(data);

  return (
    <Container>
      <div style={{ display: 'row', width: 900 }}>
        <div>
          <Typography
            variant="title"
            style={{
              textAlign: 'center',
              textDecoration: 'underline',
              fontWeight: 'bold',
              marginBottom: '24px',
            }}
          >
            Questionário Motivadores{' '}
          </Typography>
          <Typography
            variant="regular"
            style={{
              textAlign: 'center',
              marginBottom: '16px',
            }}
          >
            Você encontrará abaixo 30 proposições diferentes para ler e avaliar.
            Cada uma delas apresenta duas alternativas possíveis. Ambas são
            CORRETAS e VÁLIDAS.
          </Typography>
          <Typography
            variant="regular"
            style={{
              textAlign: 'center',
              marginBottom: '24px',
            }}
          >
            Portanto, você deverá optar por aquela que melhor refletir a sua
            realidade interna: aquela que mais parece com aquilo que você faz ou
            costuma fazer ou acredita que faria naquelas circunstâncias.
          </Typography>

          <Typography
            style={{
              textAlign: 'center',
              marginBottom: '24px',
            }}
          >
            1) Selecione 2 ou 3 pontos à alternativa que você escolher como a
            mais significativa, dependendo do grau de sua importância comparada
            com a alternativa menos cotada.
          </Typography>

          <Typography
            style={{
              textAlign: 'center',
              marginBottom: '24px',
            }}
          >
            2) Na outra alternativa, selecione 0 ou 1, dependendo dos pontos que
            você atribuiu à primeira, já que a pontuação das duas deverá somar
            sempre 3 pontos.
          </Typography>

          <Typography
            style={{
              textAlign: 'center',
              marginBottom: '24px',
            }}
          >
            Isto não é um teste de conhecimentos. Não há alternativas boas ou
            más, corretas ou incorretas. Insira nos quadradinhos correspondentes
            os pontos que você atribuir.
          </Typography>
        </div>

        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <form className="motivadores-form" onSubmit={handleSubmit(onSubmit)}>
            {fields.map((item, index) => renderField(item, index))}
            <ButtonsContainer>
              <Button size="lg" variant="outline">
                <Typography variant="accentRegular">Voltar</Typography>
              </Button>
              <Button size="lg" variant="solid" type="submit">
                <Typography variant="whiteRegular">Avançar</Typography>
              </Button>
            </ButtonsContainer>
          </form>
        </div>
      </div>
    </Container>
  );
}
