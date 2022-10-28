import Vue from 'vue';
import Router from 'vue-router';
import MainNav from '@/components/MainNav';
import OperPlan from '@/components/OperPlan';
import TehDom from '@/components/oper-plan/TehDom';
import Mart from '@/components/oper-plan/Mart';
import Tsum from '@/components/oper-plan/Tsum';
import SchoolThree from '@/components/oper-plan/SchoolThree';
import SchoolOne from '@/components/oper-plan/SchoolOne';
import GymnasiumTwo from '@/components/oper-plan/GymnasiumTwo';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'MainNav',
      component: MainNav,
    },
    {
      path: '/oper-plan/:name',
      name: 'OperPlan',
      component: OperPlan,
      children: [
        {
          path: 'school-three',
          name: 'OperPlanSchoolThree',
          component: SchoolThree,
          props: { displayName: 'КГУ “Средняя школа №3” Акимата города Рудного  адрес: ул Корчагина 168' },
        },
        {
          path: 'school-one',
          name: 'OperPlanSchoolOne',
          component: SchoolOne,
          props: {
            displayName: 'КГУ “Средняя школа №1” Акимата города Рудного  адрес: ул Дзержинского 19',
          },
        },
        {
          path: 'gymnasium-two',
          name: 'OperPlanGymnasiumTwo',
          component: GymnasiumTwo,
          props: { displayName: 'КГУ “Гимназия №2” Акимата города Рудного адрес: ул Ленина 73' },
        },
        {
          path: 'teh-dom',
          name: 'OperPlanTehDom',
          component: TehDom,
          props: { displayName: 'Техно Дом' },
        },
        {
          path: 'mart',
          name: 'OperPlanMart',
          component: Mart,
          props: { displayName: 'Март' },
        },
        {
          path: 'tsum',
          name: 'OperPlanTsum',
          component: Tsum,
          props: { displayName: 'Цум' },
        },
      ],
    },
  ],
});
