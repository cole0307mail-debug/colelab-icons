// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import GroupRuleFilledSvg from '@colelab/icons-svg/es/asn/GroupRuleFilled';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'GroupRuleFilled',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: GroupRuleFilledSvg }, slots);
  },
});
