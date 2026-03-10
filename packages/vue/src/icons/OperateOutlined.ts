// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import OperateOutlinedSvg from '@colelab/icons-svg/es/asn/OperateOutlined';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'OperateOutlined',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: OperateOutlinedSvg }, slots);
  },
});
