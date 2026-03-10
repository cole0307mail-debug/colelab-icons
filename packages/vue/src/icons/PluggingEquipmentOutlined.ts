// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import PluggingEquipmentOutlinedSvg from '@colelab/icons-svg/es/asn/PluggingEquipmentOutlined';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'PluggingEquipmentOutlined',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: PluggingEquipmentOutlinedSvg }, slots);
  },
});
