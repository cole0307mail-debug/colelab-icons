// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import AreaPlusCircleOutlinedSvg from '@colelab/icons-svg/es/asn/AreaPlusCircleOutlined';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'AreaPlusCircleOutlined',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: AreaPlusCircleOutlinedSvg }, slots);
  },
});
