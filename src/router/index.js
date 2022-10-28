import Vue from 'vue';
import Router from 'vue-router';
import MainNav from '@/components/MainNav';
import OperPlan from '@/components/OperPlan';
import TehDom from '@/components/oper-plan/TehDom';
import Mart from '@/components/oper-plan/Mart';
import Tsum from '@/components/oper-plan/Tsum';
import SchoolThree from '@/components/oper-plan/SchoolThree';

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
