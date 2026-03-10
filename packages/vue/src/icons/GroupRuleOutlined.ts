// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import GroupRuleOutlinedSvg from '@colelab/icons-svg/es/asn/GroupRuleOutlined';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'GroupRuleOutlined',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: GroupRuleOutlinedSvg }, slots);
  },
});
