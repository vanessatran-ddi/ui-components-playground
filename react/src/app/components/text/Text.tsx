import { GoabText } from "@abgov/react-components";

export const TextPage = () => {
  return (
    <>
      <GoabText as="h1" data-gridcell>Heading 1 with as</GoabText>
      <GoabText tag="h1">Heading 1</GoabText>
      <GoabText tag="h2">Heading 2</GoabText>
      <GoabText tag="h3">Heading 3</GoabText>
      <GoabText tag="h4">Heading 4</GoabText>
      <GoabText tag="h5">Heading 5</GoabText>
      <GoabText tag="span">Span</GoabText>
      <GoabText tag="div">A Div</GoabText>
      <GoabText tag="p">Paragraph</GoabText>


      <GoabText tag="div" size="body-xs">Body xs</GoabText>
      <GoabText tag="div" size="body-s">Body s</GoabText>
      <GoabText tag="div" size="body-m">Body m</GoabText>
      <GoabText tag="div" size="body-l">Body l</GoabText>
      <GoabText tag="div" maxWidth="300px">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi ornare, nibh a vulputate aliquam, lectus nibh ultricies lorem, ac dignissim eros nulla at sapien. Integer nec lorem vitae justo viverra dictum. Sed eu dolor ut erat condimentum euismod. Nulla facilisi. In hac habitasse platea dictumst. Quisque euismod, magna sit amet mollis malesuada, erat magna laoreet erat, non dictum lorem nisl quis nisi. Donec sit amet nisi. Nulla facilisi. Suspendisse potenti. Mauris et nisl. Phasellus dignissim, justo eu malesuada auctor, metus erat commodo erat, et dignissim lectus nisl quis libero. Nulla facilisi. Sed eu dolor ut erat condimentum euismod. Nulla facilisi. In hac habitasse platea dictumst. Quisque euismod, magna sit amet mollis malesuada, erat magna laoreet erat, non dictum lorem nisl quis nisi. Donec sit amet nisi. Nulla facilisi. Suspendisse potenti. Mauris et nisl. Phasellus dignissim, justo eu malesuada auctor, metus erat commodo erat, et dignissim lectus nisl quis libero. Nulla facilisi. Sed eu dolor ut erat condimentum euismod. Nulla facilisi. In hac habitasse platea dictumst. Quisque euismod, magna sit amet mollis malesuada, erat magna laoreet erat, non dictum lorem nisl quis nisi. Donec sit amet nisi. Nulla facilisi. Suspendisse potenti. Mauris et nisl. Phasellus dignissim, justo eu malesuada auctor, metus erat commodo erat, et dignissim lectus nisl quis libero. Nulla facilisi. Sed eu dolor ut erat condimentum euismod. Nulla facilisi. In hac habitasse platea dictumst. Quisque euismod, magna sit amet mollis malesuada, erat magna laoreet erat, non dictum lorem nisl quis nisi. Donec sit amet nisi. Nulla facilisi. Suspendisse potenti. Mauris et nisl. Phasellus dignissim, justo eu malesuada auctor, metus erat commodo erat, et dignissim lectus nisl quis libero. Nulla facilisi. Sed eu dolor ut erat condimentum euismod. Nulla facilisi. In hac habitasse platea dictumst. Quisque euismod, magna sit amet mollis malesuada, erat magna laoreet erat, non dictum lorem nisl quis nisi. Donec sit amet nisi. Nulla facilisi. Suspendisse potenti. Mauris et nisl. Phasellus dignissim, justo eu malesuada auctor, metus erat commodo erat, et dignissim lectus nisl quis libero.
      </GoabText>
      <GoabText mt="2">With mt=2</GoabText>
    </>
  )
}
