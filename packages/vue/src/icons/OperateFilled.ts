// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import OperateFilledSvg from '@colelab/icons-svg/es/asn/OperateFilled';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'OperateFilled',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: OperateFilledSvg }, slots);
  },
});
