import React from 'react';
import { FunctionComponent } from 'react';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';
import SvgAboutImage0001 from '../generated/svg/about-image-0001';
import SvgAboutImage0002 from '../generated/svg/about-image-0002';
import SvgAboutImage0003 from '../generated/svg/about-image-0003';
import { Text } from './text';

const Outer = styled.div`
  display: flex;
  flex-direction: column;
`

const ConceptItem = styled.div`
  padding: 4rem 1rem 5rem;
  background-color: var(--brown);
  position: relative;
  overflow: hidden;
  &:nth-child(2n - 1){
    background-color: var(--dark-brown);
  }
`

const ConceptItemInner = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 40rem;
  margin: 0 auto;
`

export const ConceptTitle = styled.div`
  color: var(--inverted-text-color);
  align-self: flex-start;
  font-weight: 700;
  font-size: 1.175rem;
  &::after {
    content: '';
    display: block;
    height: calc(1rem / 8);
    width: 100%;
    margin: 1.75rem 0;
    background-color: currentcolor;
    @media (max-width: 40rem) {
      margin: 1.5rem 0;
    }
  }
  @media (max-width: 40rem) {

  }
`

export const ConceptText = styled.div`
  color: var(--inverted-text-color);
  line-height: 2;
  margin: -0.5rem 0;
  white-space: pre-wrap;
  @media (max-width: 40rem) {
    line-height: 1.75;
    margin: -0.275rem 0;
    white-space: normal;
  }
`

const ConceptImageOuter = styled.div`
  color: var(--inverted-text-color);
  margin-top: 3rem;
  align-self: center;
  svg {
    max-width: 100%;
    width: 100%;
  }
`

const ConceptLayoutImageOuter = styled.div`
  position: absolute;
  opacity: 0.25;
  bottom: 0;
  color: var(--inverted-text-color);
  align-self: center;
  right: 20%;
  transform: scale(1.25);
  transform-origin: center bottom;
  margin-bottom: 4rem;
  svg {
    max-width: 100%;
    width: 100%;
  }
`
const ConceptLayoutImageOuterRight = styled(ConceptLayoutImageOuter)`
`

export const Concept: FunctionComponent = () => {
  const {search} = useLocation()
  const isAlt = search === '?alt'
  return <Outer>
    <ConceptItem>
      <ConceptItemInner>
        <ConceptTitle>
          <Text ja="金額で測れない豊かな空間" en="Rich space that cannot be measured by the amount of money"/>
        </ConceptTitle>
        <ConceptText>
          <Text
            ja={`空間の質は、必ずしも予算に比例しないことを実証し続けています。\nよい建築、よい空間は、設計のプロセスでどれほど妥協せず\n時間をかけて吟味し続けるかで決まります。\nそこで必要となるのは、こだわりに対する施主のご理解です。\n素材のバランスを吟味し、細部にこだわり、工夫を施すことで\n高価な建材では得られない均衡の取れた落ち着きのある空間を設計します。`}
            en={`We continue to demonstrate that the quality of space is not always proportional to the budget. \nGood architecture and good space are determined by how uncompromising the design process is and how much time you spend scrutinizing. \n Therefore, what is needed is the owner's understanding of the commitment. \nBy carefully examining the balance of materials, paying attention to details, and devising \n, we design a balanced and calm space that cannot be obtained with expensive building materials.`}
          />
        </ConceptText>
        {
          isAlt ? <ConceptLayoutImageOuter>
            <SvgAboutImage0001/>
          </ConceptLayoutImageOuter> :
          <ConceptImageOuter>
            <SvgAboutImage0001/>
          </ConceptImageOuter>
        }
      </ConceptItemInner>
    </ConceptItem>
    <ConceptItem>
      <ConceptItemInner>
        <ConceptTitle>
          <Text ja="人々が繋がりたくなる空間" en="A space where people want to connect" />
        </ConceptTitle>
        <ConceptText>
          <Text
            ja={`よい空間は、人々の隔たりをなくす力があると感じています。\n豊かな空間では、ひとの心も豊かになり、\nそこにはもてなしと、感謝の気持ちが生まれます。\nオフィスビルのような無味乾燥な空間ではギスギスしがちな関係も、\n 心地よい空間に身を置くことで、互いに許しあいます。\nひとの原点に戻れる場所、そんな空間を設計します。`}
            en={`I feel that a good space has the power to close people's gaps. \n In a rich space, people's hearts will be enriched, and \n there will be hospitality and gratitude. \n Even in a dry space like an office building, relationships that tend to be squeaky can be forgiven by putting yourself in a comfortable space. \n We will design a space where you can return to the origin of people.`}
          />
        </ConceptText>
        {
          isAlt ? <ConceptLayoutImageOuterRight>
            <SvgAboutImage0002/>
          </ConceptLayoutImageOuterRight> :
          <ConceptImageOuter>
            <SvgAboutImage0002/>
          </ConceptImageOuter>
        }
      </ConceptItemInner>
    </ConceptItem>
    <ConceptItem>
      <ConceptItemInner>
        <ConceptTitle>
          <Text ja="“奥行き”のある空間" en={`Space with "depth"`} />
        </ConceptTitle>
        <ConceptText>
          <Text
            ja={`素材は、基本的に自然素材を使用します。\nいくら本物の木に似せて作られたプリントのシートでも、\n拡大するとただの凹凸のないまっ平な面です。 \nしかし自然素材は、細胞を内包しており、細胞はさらに構成要素を持っていて\nいくらでも、拡大、縮小可能です。\nその奥行きが、ひとに落ち着きを与え、さらに、\nひとのまわりに必要不可欠な様々な微生物にも\n自然に近い居場所を与えているといえます。\n見た目のクリーンさよりも、調和の取れた空間が、心身の健康につながります。\nそのために、自然素材を多用した奥行のある設計を行います。\nよい建築、よい空間は、設計のプロセスでどれほど妥協せず\n時間をかけて吟味し続けるかで決まります。\nそこで必要となるのは、こだわりに対する施主のご理解です。\n素材のバランスを吟味し、細部にこだわり、工夫を施すことで\n高価な建材では得られない均衡の取れた落ち着きのある空間を設計します。`}
            en={`The material is basically a natural material. \nNo matter how much a printed sheet is made to resemble a real tree, \nit is just a flat surface with no irregularities when enlarged. \nBut natural materials contain cells, which have additional components that can be expanded and contracted as much as you like. \nIt can be said that its depth gives people calmness, and \n gives a place close to nature to various microorganisms that are indispensable around people. \n A harmonious space, rather than a clean appearance, leads to physical and mental health. \n For that purpose, we will design with depth using a lot of natural materials. \nGood architecture and good space are determined by how uncompromising the design process is and how much time you spend scrutinizing. \n Therefore, what is needed is the owner's understanding of the commitment. \nBy carefully examining the balance of materials, paying attention to details, and devising, \n we design a well-balanced and calm space that cannot be obtained with expensive building materials.`}
          />
        </ConceptText>
        {
          isAlt ? <ConceptLayoutImageOuter>
            <SvgAboutImage0003/>
          </ConceptLayoutImageOuter> :
          <ConceptImageOuter>
            <SvgAboutImage0003/>
          </ConceptImageOuter>
        }
      </ConceptItemInner>
    </ConceptItem>
  </Outer>
}