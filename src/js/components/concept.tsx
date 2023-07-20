import React from 'react';
import { FunctionComponent } from 'react';
import styled, { css } from 'styled-components';
import { Language, useLanguage } from '../hooks/use-language'
import { Text } from './text';
import { BaseProps } from '../types/base-props';

const Outer = styled.div`
  display: flex;
  flex-direction: column;
`

const ConceptItem = styled.div`
  padding: 4rem 1rem 5rem;
  background-color: var(--brown);
  position: relative;
  overflow: hidden;
  &:nth-child(2n){
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
  font-weight: 500;
  font-size: 1.175rem;
  &::after {
    content: '';
    display: block;
    height: calc(1rem / 16);
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

export const ConceptText = styled.div<{language: Language}>`
  color: var(--inverted-text-color);
  line-height: 2;
  margin: -0.5rem 0;
  white-space: pre-wrap;
  text-align: justify;
  ${({language}) => {
    switch(language){
      case 'en':
        return css`
          font-style: italic;
        `
    }
  }}
  @media (max-width: 40rem) {
    line-height: 1.75;
    margin: -0.275rem 0;
    white-space: normal;
  }
`

export const Concept: FunctionComponent<BaseProps> = () => {
  const {language} = useLanguage()
  return <Outer>
    <ConceptItem>
      <ConceptItemInner>
        <ConceptTitle>
          <Text
            ja="金額で測れない豊かな空間"
            en="Rich space that cannot be measured by the money"
            zh="无法用金钱来衡量丰富的空间"
          />
        </ConceptTitle>
        <ConceptText language={language}>
          <Text
            ja={`空間の質は、必ずしも予算に比例しないことを実証し続けています。\nよい建築、よい空間は、設計のプロセスでどれほど妥協せず\n時間をかけて吟味し続けるかで決まります。\n素材のバランスを吟味し、細部にこだわり、工夫を施すことで\n高価な建材では得られない均衡の取れた落ち着きのある空間を設計します。`}
            en={`We continue to demonstrate that the quality of space is not always proportional to the budget.\nGood architecture, good space, It depends on whether you continue to scrutinize over time，never compromise in the design process.\nBy carefully examining the balance of the materials, paying attention to details, \nwe design a balanced and calm space that cannot be obtained only with expensive building materials.`}
            zh={`我们一贯证明，空间质量并不总是与预算成正比。\n好建筑，好空间，重要的是在设计过程中绝不妥协，\n花费功夫不断的进行思考。\n\n通过认真筛选选材料，仔细考虑细节，\n我们设计出协调，舒适的空间。\n而这种空间用昂贵的建筑材料是无法获得的。`}
          />
        </ConceptText>
      </ConceptItemInner>
    </ConceptItem>
    <ConceptItem>
      <ConceptItemInner>
        <ConceptTitle>
          <Text
            ja="人々が繋がりたくなる空間"
            en="A space where people want to connect"
            zh="衔接人与人的空间"
          />
        </ConceptTitle>
        <ConceptText language={language}>
          <Text
            ja={`よい空間は、人々の隔たりをなくす力があると感じています。\n豊かな空間では、ひとの心も豊かになり、\nそこにはもてなしと、感謝の気持ちが生まれます。\nオフィスビルのような無味乾燥な空間ではギスギスしがちな関係も、\n 心地よい空間に身を置くことで、互いに許しあいます。\nひとの原点に戻れる場所、そんな空間を設計します。`}
            en={`I feel that a good space has the power to close people's gaps.\nIn a rich space, people's hearts will be enriched,\nHospitality and gratitude are born there.\nRelationships that tend to be squeaky in a dry space like an office building\n By putting yourself in a comfortable space, we forgive each other.\nWe will design a space where people can return to the origin.`}
            zh={`我觉得一个好的空间可以弥合人们之间的鸿沟。\n在舒适的空间里，人们的心灵将会变得丰富，\n热情好客和感激之情在此诞生。\n在干燥的空间（如办公楼）中往往吱吱作响的人际关系，\n通过将自己置于舒适的空间中，我们可以彼此原谅。\n我们将设计一个空间，让人们可以回到原点。`}
          />
        </ConceptText>
      </ConceptItemInner>
    </ConceptItem>
    <ConceptItem>
      <ConceptItemInner>
        <ConceptTitle>
          <Text
            ja="“奥行き”のある空間"
            en={`Space with "depth"`}
            zh="具有“深度”的空间" 
          />
        </ConceptTitle>
        <ConceptText language={language}>
          <Text
            ja={`素材は、基本的に自然素材を使用します。\nいくら本物の木に似せて作られたプリントのシートでも、\n拡大するとただの凹凸のないまっ平な面です。 \nしかし自然素材は、細胞を内包しており、細胞はさらに構成要素を持っていて\nいくらでも、拡大、縮小可能です。\nその奥行きが、ひとに落ち着きを与え、さらに、\nひとのまわりに必要不可欠な様々な微生物にも\n自然に近い居場所を与えているといえます。\n見た目のクリーンさよりも、調和の取れた空間が、心身の健康につながります。`}
            en={`The material is basically a natural material.\nNo matter how much the printed sheet is made to resemble a real tree,\nwhen enlarged, it is just a flat surface with no irregularities.\nBut natural materials contain cells, which have more components.\nIt keep the same density as you zoom in and out.\nThe depth gives people a sense of calm, and also for formicroorganisms that are indispensable around people.\nIt can be said that it gives a place close to nature.\nA harmonious space, rather than a clean appearance, leads to physical and mental health.`}
            zh={`素材基本上是天然材料。\n不管印刷的塑料仿木板多么像真正的木材，\n放大时，它只是一个没有凹凸的平坦表面。\n但是天然材料包含细胞，而细胞具有更小的内部构造。\n随意放大和缩小，它都是有深度的。\n可以说，这种深度给人一种安心舒适的感觉，也给人们提供了一个接近自然的地方，对人有益无害的各种微生物也有了藏身之处。\n真正的身心健康，不是整洁的外面，而是和谐的内面带来的。`}
          />
        </ConceptText>
      </ConceptItemInner>
    </ConceptItem>
  </Outer>
}